// components/ui/auth/RegisterFrom.jsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "@/app/actions/auth/registerUser"; // server action
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Social from "@/components/ui/auth/Social";

export default function RegisterForm() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await registerUser(data); 
    setMessage(res.message);
  };

  return (
    <Card className="w-full max-w-sm mx-auto shadow-md bg-card">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-semibold text-primary">
          Register
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">Full name is required</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">Email is required</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">Password is required</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
        {message && <p className="mt-2 text-center">{message}</p>}
      </CardContent>
      <Social />
    </Card>
  );
}
