import { INewsItem } from "@/data-transfer-objects";
import envHandler from "./env-handler";

const addJpgHeader = (byteArray: string) => {
  return `data:image/jpeg;base64, ${byteArray}`;
};

export const extractImagesFromContent = (items: INewsItem[]) => {
  items.forEach((item) => {
    const imageRelativePath = item.contents
      .match(/^\{STEAM_CLAN_IMAGE\}\S*(.jpg)?(.png)?/g)
      ?.toString();
    item.thumbnail = imageRelativePath?.replace(
      /^\{STEAM_CLAN_IMAGE\}/,
      envHandler.getSteamImagesPath() || "",
    );
    item.contents = item.contents.replaceAll(/\{STEAM_CLAN_IMAGE\}\S*(.jpg)?(.png)?/g, "");
  });

  return items;
};

const imageUtil = { addJpgHeader, extractImagesFromContent };

export default imageUtil;
