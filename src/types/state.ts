import { Promotion, Tag } from "./models"

export type AppState = {
  tags: Array<Tag>
  promotions: Array<Promotion>
}
