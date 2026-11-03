"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/links";
import { formatBrazilianPhone, isValidBrazilianPhone } from "@/lib/phone";
import { cn } from "@/lib/utils";

const { form: copy } = site.booking;
const treatmentValues = copy.treatment.options.map((o) => o.value);
const periodValues = copy.period.options.map((o) => o.value);

const schema = z.object({
  name: z.string().trim().min(3, copy.errors.nameMin).max(80, copy.errors.nameMax),
  phone: z.string().refine(isValidBrazilianPhone, copy.errors.phone),
  treatment: z.string().refine((v) => treatmentValues.includes(v), copy.errors.treatment),
  period: z.string().refine((v) => periodValues.includes(v), copy.errors.period),
  message: z.string().trim().max(500, copy.errors.messageMax),
});

type BookingValues = z.infer<typeof schema>;

const labelOf = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value;

export function BookingForm() {
  const form = useForm<BookingValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", treatment: "", period: "", message: "" },
    mode: "onTouched",
  });

  function onSubmit(values: BookingValues) {
    const text = copy.buildMessage({
      name: values.name,
      phone: values.phone,
      treatment: labelOf(copy.treatment.options, values.treatment),
      period: labelOf(copy.period.options, values.period),
      message: values.message || undefined,
    });
    const url = buildWhatsAppUrl(text);

    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.assign(url);

    toast.success(copy.toast.title, { description: copy.toast.description });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="grid gap-5 sm:grid-cols-2"
        data-testid="booking-form"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{copy.name.label}</FormLabel>
              <FormControl>
                <Input
                  autoComplete="name"
                  placeholder={copy.name.placeholder}
                  className="h-12 rounded-xl bg-background px-4 text-base md:text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{copy.phone.label}</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder={copy.phone.placeholder}
                  className="h-12 rounded-xl bg-background px-4 text-base md:text-base"
                  {...field}
                  onChange={(e) => field.onChange(formatBrazilianPhone(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="treatment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{copy.treatment.label}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value} name={field.name}>
                <FormControl>
                  <SelectTrigger
                    onBlur={field.onBlur}
                    ref={field.ref}
                    className="h-12! w-full rounded-xl bg-background px-4 text-base md:text-base"
                  >
                    <SelectValue placeholder={copy.treatment.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {copy.treatment.options.map((o) => (
                    <SelectItem key={o.value} value={o.value} className="py-2.5 text-base">
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="period"
          render={({ field, fieldState }) => (
            <FormItem className="sm:col-span-2">
              <fieldset aria-describedby={fieldState.error ? "period-error" : undefined}>
                <legend
                  className="mb-2 text-sm leading-none font-medium data-[error=true]:text-destructive"
                  data-error={!!fieldState.error}
                >
                  {copy.period.label}
                </legend>
                <div className="grid grid-cols-3 gap-2">
                  {copy.period.options.map((o) => {
                    const checked = field.value === o.value;
                    return (
                      <label
                        key={o.value}
                        className={cn(
                          "flex h-12 cursor-pointer items-center justify-center rounded-xl border bg-background text-sm font-medium transition-colors has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50",
                          checked ? "border-primary bg-secondary text-secondary-foreground" : "hover:bg-muted",
                          fieldState.error && !checked && "border-destructive/60",
                        )}
                      >
                        <input
                          type="radio"
                          name={field.name}
                          value={o.value}
                          checked={checked}
                          onChange={() => field.onChange(o.value)}
                          onBlur={field.onBlur}
                          ref={o.value === copy.period.options[0]?.value ? field.ref : undefined}
                          className="sr-only"
                        />
                        {o.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              {fieldState.error && (
                <p id="period-error" className="text-sm text-destructive">
                  {fieldState.error.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>{copy.message.label}</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder={copy.message.placeholder}
                  className="min-h-28 rounded-xl bg-background px-4 py-3 text-base md:text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-3 sm:col-span-2">
          <Button type="submit" size="xl" className="w-full shadow-lift" disabled={form.formState.isSubmitting}>
            <Send aria-hidden="true" />
            {copy.submit}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            {copy.privacy}{" "}
            <Link href="/privacidade" className="font-medium text-primary underline underline-offset-2">
              {site.privacy.linkLabel}
            </Link>
            .
          </p>
        </div>
      </form>
    </Form>
  );
}
