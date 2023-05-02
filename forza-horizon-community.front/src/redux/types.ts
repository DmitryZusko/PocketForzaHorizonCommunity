import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export type ActionWithPayload<Payload> = ReturnType<ActionCreatorWithPayload<Payload>>;
