"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


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
 
const formSchema = z.object({
  electionName: z.string().min(2).max(50),
  electioDescription: z.string().min(2).max(50),
  electionStartDate: z.coerce.date(),
  electionEndDate: z.coerce.date(),
})

export default function ElectionForm () {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            electionName: "",
            electioDescription: "",
            electionStartDate: new Date(),//current date
            electionEndDate: new Date(),//current date
        },
      })

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
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>electionName <span className="text-red-600 hidden">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
              
            />
            <FormField
              control={form.control}
              name="electioDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>electioDescription</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              
            />
            <FormField
              control={form.control}
              name="electionStartDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>electionStartDate</FormLabel>
                  <FormControl>
                    <Input type="date"{...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              
            />
            <FormField
              control={form.control}
              name="electionEndDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>electionEndDate</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
}
