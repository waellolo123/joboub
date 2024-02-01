"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hotel, Room } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

interface AddHotelFormProps {
  hotel: HotelWithRooms | null;
}

export type HotelWithRooms = Hotel & {
  rooms: Room[]
}

const formSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  image: z.string().min(1),
  country: z.string().min(1),
  state: z.string().optional(),
  city: z.string().optional(),
  locationDescription: z.string().min(10),
  gym: z.boolean().optional(),
  spa: z.boolean().optional(),
  bar: z.boolean().optional(),
  laundry: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  freeWifi: z.boolean().optional(),
  movieNights: z.boolean().optional(),
  sweemingPool: z.boolean().optional(),
  coffeShop: z.boolean().optional()
})

const AddHotelForm = ({hotel}: AddHotelFormProps) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      country: "",
      state: "",
      city: "",
      locationDescription: "",
      gym: false,
      spa: false,
      bar: false,
      laundry: false,
      restaurant: false,
      shopping: false,
      freeParking: false,
      bikeRental: false,
      freeWifi: false,
      movieNights: false,
      sweemingPool: false,
      coffeShop: false
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-500">{hotel ? "Update your hotel" : "Describe your hotel"}</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hotel Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Beach Azure" {...field} />
                  </FormControl>
                  <FormDescription>
                    Provide your hotel name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hotel Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Beach Hotel is parked with many awesome amenitie" {...field} />
                  </FormControl>
                  <FormDescription>
                    Provide a breef description of your hotel
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="">
              <FormLabel>Choose Amenities</FormLabel>
              <FormDescription>Choose Amenities popular in your hotel</FormDescription>
              <div className="grid gridcols2 gap-4 mt-2">
                <FormField 
                 control={form.control}
                 name="description"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Hotel Description</FormLabel>
                     <FormControl>
                       <Textarea placeholder="Beach Hotel is parked with many awesome amenitie" {...field} />
                     </FormControl>
                     <FormDescription>
                       <div className="grid grid-cols-2 gap-4 mt-2">
                        <FormField 
                          control={form.control}
                          name="gym"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Gym</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="spa"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Spa</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="bar"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Bar</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="laundry"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Laundry</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="restaurant"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Restaurant</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="shopping"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Shopping</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="freeParking"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Free Parking</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="bikeRental"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Bike Rental</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="freeWifi"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Free Wifi</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="movieNights"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Movie Nights</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="sweemingPool"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Sweeming Pool</FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField 
                          control={form.control}
                          name="coffeShop"
                          render={({ field }) => (
                            <FormItem className="flex items-end space-x-3 rounded-md border p-4">
                              <FormControl>
                               <Checkbox checked={field.value} onCheckedChange={field.onChange} /> 
                              </FormControl>
                              <FormLabel>Coffee Shop</FormLabel>
                            </FormItem>
                          )}
                        />
                       </div>
                     </FormDescription>
                     <FormMessage />
                   </FormItem>
                 )}
                />
              </div>
            </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
         
        </div>
      </div>  
      </form>
     </Form>
    </div>
  )
}

export default AddHotelForm;
