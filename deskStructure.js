// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder"

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Channel")
        .child(
          S.list()
            .title("Channel Document")
            .items([
              S.listItem().title("Websites").child(S.documentTypeList("head")),
              S.listItem()
                .title("Campaigns")
                .child(S.documentTypeList("campaign")),

              S.listItem()
                .title("Media")
                .child(S.documentTypeList("headImage")),
              S.listItem()
                .title("Social Links")
                .child(S.documentTypeList("social")),
            ])
        ),
    ])
