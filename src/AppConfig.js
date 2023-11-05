export const APP_CONFIG = {
  appName: "searchFlight Challenge",
  brandName: "turkishairlines.com",
  discountRate: 0.5,
  pendingDurationMilliseconds: 1000,
  lang: {
    tr: {
      langName: "tr",
      pages: {
        searchPage: {
          route: "/",
          documentTitle: "Uçuş Arama Sayfası",
          staticTexts: {
            pageTitle: "Merhaba",
            pageSubtitle: "Neyi Keşfetmek istersiniz",
            form: {
              from: {
                placeholder: "Nereden",
              },
              to: {
                placeholder: "Nereye",
              },
              date: {
                label: "Tarih",
              },
              passengerCount: {
                title: "Kabin ve Yolcu Seçimi",
                passengerCountLabel: "Yolcu",
                economyRadio: {
                  label: "Economy Class",
                },
                businessRadio: {
                  label: "Business Class",
                },
              },
            },
          },
        },
        listPage: {
          route: "/list",
          documentTitle: "Uçuş Listeleme Sayfası",
          staticTexts: {
            titleBadge: "Uçuş",
            switchLabel: "Promosyon Kodu",
            promotionNotifications: [
              "Promosyon kodu seçeneği ile tüm Economy kabini ECO paketlerini %50 indirimle satın alabilirsiniz!",
              "Promosyon kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılamamaktadır.",
            ],
            sortOptions: {
              title: "Sıralama Kriterleri",
              economyLabel: "Ekonomi Ücreti",
              arrivalTimeLabel: "Kalkış Saati",
            },
            flightCard: {
              flightDuration: "Uçus Süresi",
              pricingLabel: "Yolcu Başına",
              selectButtonLabel: "Uçuş Seç",
            },
          },
        },
        cabinSelectionPage: {
          route: "/cabin-selection",
          documentTitle: "Kabin Seçim Sayfası",
          staticTexts: {
            success: {
              selectionStatus: "Kabin seçiminiz tamamlandı",
              totalAmountLabel: "Toplam tutar",
            },
            error: {
              selectionStatus: "Kabin seçiminiz tamamlandı",
              turnbackButtonLabel: "Başa Dön",
            },
          },
        },
      },
    },
    en: null,
  },
};
