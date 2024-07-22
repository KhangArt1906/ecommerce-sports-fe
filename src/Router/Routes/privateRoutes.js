import { adminRoutes } from "./adminRoutes";
import { providerRoutes } from "./providerRoutes";

export const privateRoutes = [...adminRoutes, ...providerRoutes];
