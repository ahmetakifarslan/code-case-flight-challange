export const APP_CONFIG = {
  discount: 50,
  httpPendingDuration: 1000,
  layout: {
    header: {
      brandName: "turkishairlines.com",
      appName: "searchFlight Challenge",
    },
  },
  pages: {
    searchPage: {
      route: "/",
      title: "Merhaba",
      subTitle: "Neyi Keşfetmek istersiniz",
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
    listPage: {
      route: "/list",
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
    cabinSelectionPage: {
      route: "/cabin-selection",
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
};
