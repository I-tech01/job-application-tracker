"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function SignIn() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black m-4">
            Sign In
          </CardTitle>
          <CardDescription className="text-gray-600 m-4">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <form action="" className="space-y-4 p-4" method="POST">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Name
              </Label>
              <Input
                type="text"
                placeholder="Enter your name"
                id="name"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                type="email"
                placeholder="Enter your email"
                id="email"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                type="password"
                placeholder="Enter your password"
                id="password"
                required
                minLength={8}
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
          </CardContent>
          <CardFooter className="space-y-4 p-4  flex-col">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Sign In
            </Button>
            <p className="text-sm text-gray-600 text-center">
              Dont have an account?{" "}
           
            <Link
              href="/sign-up"
              className="text-primary hover:underline font-medium"
            >
              Sign Up
            </Link>
             </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
