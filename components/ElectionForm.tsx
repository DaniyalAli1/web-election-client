"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from 'react'
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
 
const formSchema = z.object({
  electionName: z.string().min(2).max(50),
  electioDescription: z.string().min(2).max(50),
  electionStartDate: z.coerce.date(),
  electionEndDate: z.coerce.date(),
})


const ElectionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        electionName: "",
        electionDescription: "",
        electionStartDate: new Date(),//current date
        electionEndDate: new Date(),//current date
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="electionName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Election Name <span className={cn("text-red-600 hidden",{'inline-block': fieldState.invalid})}>*</span></FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
        control={form.control}
        name="electionDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Election Description <span className={cn("text-red-600 hidden",{'inline-block': fieldState.invalid})}>*</span></FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
          control={form.control}
          name="electionStartDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Election Start Date <span className={cn("text-red-600 hidden",{'inline-block': fieldState.invalid})}>*</span></FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="electionEndDate"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Election End Date <span className={cn("text-red-600 hidden",{'inline-block': fieldState.invalid})}>*</span></FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>

    
  )
}

export default ElectionForm