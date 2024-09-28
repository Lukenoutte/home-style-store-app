"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ApolloProvider client={client}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </ApolloProvider>
    </NextUIProvider>
  );
}
