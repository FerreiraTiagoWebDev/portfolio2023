import { DialogProvider } from './useDialog/provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <DialogProvider>{children}</DialogProvider>;
}
