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
import { useSendTransaction } from "thirdweb/react"
import { contract } from "@/lib/thirdweb"
import { PreparedTransaction, prepareContractCall } from "thirdweb"
 
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
        electioDescription: "",
        electionStartDate: new Date(),//current date
        electionEndDate: new Date(),//current date
    },
  })

  const { mutateAsync: sendTransaction, } = useSendTransaction();
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)

     

  const {electionName: _name, electioDescription: _description, electionStartDate: _startTime, electionEndDate: _endTime }= values;
    

  const _startEpoch = BigInt(Math.floor(new Date(_startTime).getTime() / 1000));
  const _endEpoch = BigInt(Math.floor(new Date(_endTime).getTime() / 1000));

  const transaction = prepareContractCall({ 
      contract, 
      method: "createElection", 
      params: [_name, _description, _startEpoch, _endEpoch] 
    }) as PreparedTransaction;

    sendTransaction(transaction).then((data)=> {}).catch((error:Error)=> {});
  }

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="electionName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Election Name <span className={cn('text-red-600 hidden', {'inline-block' : fieldState.invalid})}>*</span></FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
        control={form.control}
        name="electioDescription"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>Election Description <span className={cn('text-red-600 hidden', {'inline-block' : fieldState.invalid})}>*</span></FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
          control={form.control}
          name="electionStartDate"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Election Start Date <span className={cn('text-red-600 hidden', {'inline-block' : fieldState.invalid})}>*</span></FormLabel>
              <FormControl>
                <Input type="date" {...field} value={field.value instanceof Date ? field.value.toISOString(): field.value}  />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="electionEndDate"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Election End Date <span className={cn('text-red-600 hidden', {'inline-block' : fieldState.invalid})}>*</span></FormLabel>
              <FormControl>
                <Input type="date" {...field} value={field.value instanceof Date ? field.value.toISOString(): field.value} />
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