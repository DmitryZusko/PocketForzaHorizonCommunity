import { IGetLatestDesignsRequest } from "@/data-transfer-objects/requests/GetLatestDesignsRequest";
import designService from "@/services/design-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLatestDesigns = createAsyncThunk(
  "design/getLatestDesigns",
  async ({ page, pageSize, descriptionLimit }: IGetLatestDesignsRequest) => {
    return designService.getLatestDesigns({ page, pageSize, descriptionLimit });
  },
);
