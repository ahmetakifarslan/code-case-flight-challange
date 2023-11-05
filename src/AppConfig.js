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
                errorMessages: {
                  required: "Kalkış noktasını boş bırakamazsınız",
                  airportValidator:
                    "Farklı bir kalkış noktası seçin. Örn; Istanbul",
                },
              },
              to: {
                placeholder: "Nereye",
                errorMessages: {
                  required: "Varış noktasını boş bırakamazsınız",
                  airportValidator:
                    "Farklı bir varış noktası seçin. Örn; Antalya",
                },
              },
              date: {
                label: "Tarih",
                errorMessages: {},
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
                errorMessages: {},
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
