Bridge.merge(new System.Globalization.CultureInfo("dje-NE", true), {
    englishName: "Zarma (Niger)",
    nativeName: "Zarmaciine (Nižer)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "CFA",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 5,
        currencyPositivePattern: 1,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Alh","Ati","Ata","Ala","Alm","Alz","Asi"],
        abbreviatedMonthGenitiveNames: ["Žan","Fee","Mar","Awi","Me","Žuw","Žuy","Ut","Sek","Okt","Noo","Dee",""],
        abbreviatedMonthNames: ["Žan","Fee","Mar","Awi","Me","Žuw","Žuy","Ut","Sek","Okt","Noo","Dee",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Alhadi","Atinni","Atalaata","Alarba","Alhamisi","Alzuma","Asibti"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Žanwiye","Feewiriye","Marsi","Awiril","Me","Žuweŋ","Žuyye","Ut","Sektanbur","Oktoobur","Noowanbur","Deesanbur",""],
        monthNames: ["Žanwiye","Feewiriye","Marsi","Awiril","Me","Žuweŋ","Žuyye","Ut","Sektanbur","Oktoobur","Noowanbur","Deesanbur",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["Alh","Ati","Ata","Ala","Alm","Alz","Asi"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});