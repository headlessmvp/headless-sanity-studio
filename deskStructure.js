// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder"

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Inventory")
        .child(
          S.list()
            .title("Inventory Documents")
            .items([
              S.listItem()
                .title("Product Stock")
                .child(S.documentTypeList("product")),
              S.listItem()
                .title("Product Media")
                .child(S.documentTypeList("productImage")),
            ])
        ),
      S.listItem()
        .title("Platform Management")
        .child(
          S.list()
            .title("Platform Management Document")
            .items([
              S.listItem()
                .title("Categories")
                .child(S.documentTypeList("category")),
              S.listItem()
                .title("Sub Categories")
                .child(S.documentTypeList("subCategory")),
              S.listItem()
                .title("Color Swatches")
                .child(S.documentTypeList("color")),
              S.listItem().title("Sizes").child(S.documentTypeList("size")),
            ])
        ),
      S.listItem()
        .title("Channel")
        .child(
          S.list()
            .title("Channel Document")
            .items([
              S.listItem().title("Websites").child(S.documentTypeList("head")),
              S.listItem()
                .title("Media")
                .child(S.documentTypeList("headImage")),
            ])
        ),
    ])
