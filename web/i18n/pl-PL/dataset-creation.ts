const translation = {
  steps: {
    header: {
      creation: 'Utwórz Wiedzę',
      update: 'Dodaj dane',
    },
    one: 'Wybierz źródło danych',
    two: 'Przetwarzanie i Czyszczenie Tekstu',
    three: 'Wykonaj i zakończ',
  },
  error: {
    unavailable: 'Ta Wiedza nie jest dostępna',
  },
  stepOne: {
    filePreview: 'Podgląd pliku',
    pagePreview: 'Podgląd strony',
    dataSourceType: {
      file: 'Importuj z pliku tekstowego',
      notion: 'Synchronizuj z Notion',
      web: 'Synchronizuj z witryny',
    },
    uploader: {
      title: 'Prześlij plik tekstowy',
      button: 'Przeciągnij i upuść plik lub',
      browse: 'Przeglądaj',
      tip: 'Obsługuje {{supportTypes}}. Maksymalnie {{size}}MB każdy.',
      validation: {
        typeError: 'Nieobsługiwany typ pliku',
        size: 'Plik jest za duży. Maksymalnie {{size}}MB',
        count: 'Nieobsługiwane przesyłanie wielu plików',
        filesNumber: 'Osiągnąłeś limit przesłania partii {{filesNumber}}.',
      },
      cancel: 'Anuluj',
      change: 'Zmień',
      failed: 'Przesyłanie nie powiodło się',
    },
    notionSyncTitle: 'Notion nie jest podłączony',
    notionSyncTip:
      'Aby synchronizować z Notion, najpierw trzeba ustanowić połączenie z Notion.',
    connect: 'Przejdź do połączenia',
    button: 'dalej',
    emptyDatasetCreation: 'Chcę utworzyć pustą Wiedzę',
    modal: {
      title: 'Utwórz pustą Wiedzę',
      tip: 'Pusta Wiedza nie będzie zawierała żadnych dokumentów, a można przesyłać dokumenty w dowolnym momencie.',
      input: 'Nazwa Wiedzy',
      placeholder: 'Proszę wpisz',
      nameNotEmpty: 'Nazwa nie może być pusta',
      nameLengthInvaild: 'Nazwa musi zawierać od 1 do 40 znaków',
      cancelButton: 'Anuluj',
      confirmButton: 'Utwórz',
      failed: 'Utworzenie nie powiodło się',
    },
  },
  stepTwo: {
    segmentation: 'Ustawienia bloków tekstu',
    auto: 'Automatycznie',
    autoDescription:
      'Automatyczne ustawianie bloków i reguł preprocessingu. Nieużytkownicy są zaleceni do wyboru tej opcji.',
    custom: 'Niestandardowo',
    customDescription:
      'Dostosuj reguły bloków, długość bloków i reguły preprocessingu itp.',
    separator: 'Separator bloków',
    separatorPlaceholder:
      'Na przykład nowa linia (\\n) lub specjalny separator (np. "***")',
    maxLength: 'Maksymalna długość bloku',
    overlap: 'Nakładka bloków',
    overlapTip:
      'Ustawienie nakładki bloków pozwala zachować semantyczną zgodność między nimi, poprawiając efekt pobierania. Zaleca się ustawienie 10%-25% maksymalnej długości bloku.',
    overlapCheck:
      'nakładka bloków nie powinna być większa niż maksymalna długość bloku',
    rules: 'Reguły preprocessingu tekstu',
    removeExtraSpaces: 'Zastąp kolejne spacje, nowe linie i tabulatory',
    removeUrlEmails: 'Usuń wszystkie adresy URL i e-maile',
    removeStopwords: 'Usuń słowa powszechne takie jak "a", "an", "the"',
    preview: 'Potwierdź i Podgląd',
    reset: 'Reset',
    indexMode: 'Tryb indeksowania',
    qualified: 'Wysoka jakość',
    recommend: 'Polecać',
    qualifiedTip:
      'Wywołaj domyślne interfejsy wbudowania systemu do przetwarzania, zapewniając wyższą dokładność podczas zapytań przez użytkowników.',
    warning: 'Proszę najpierw skonfigurować klucz API dostawcy modelu.',
    click: 'Przejdź do ustawień',
    economical: 'Ekonomiczny',
    economicalTip:
      'Użyj offline\'owych silników wektorowych, indeksów słów kluczowych itp., aby zmniejszyć dokładność bez wydawania tokenów',
    QATitle: 'Segmentacja w formacie pytania i odpowiedzi',
    QATip: 'Włączenie tej opcji spowoduje zużycie większej liczby tokenów',
    QALanguage: 'Segmentacja przy użyciu',
    emstimateCost: 'Oszacowanie',
    emstimateSegment: 'Oszacowane bloki',
    segmentCount: 'bloki',
    calculating: 'Obliczanie...',
    fileSource: 'Przetwarzaj dokumenty',
    notionSource: 'Przetwarzaj strony',
    other: 'i inne ',
    fileUnit: ' plików',
    notionUnit: ' stron',
    previousStep: 'Poprzedni krok',
    nextStep: 'Zapisz & Przetwarzaj',
    save: 'Zapisz & Przetwarzaj',
    cancel: 'Anuluj',
    sideTipTitle: 'Dlaczego blok i preprocess?',
    sideTipP1:
      'Podczas przetwarzania danych tekstowych, blok i czyszczenie są dwoma ważnymi krokami preprocessingu.',
    sideTipP2:
      'Segmentacja dzieli długi tekst na akapity, dzięki czemu modele są w stanie lepiej zrozumieć. Poprawia to jakość i trafność wyników modelu.',
    sideTipP3:
      'Czyszczenie usuwa zbędne znaki i formatowanie, sprawiając, że Wiedza jest czystsza i łatwiejsza do analizy.',
    sideTipP4:
      'Odpowiednie blok i czyszczenie poprawiają wydajność modelu, zapewniając bardziej dokładne i wartościowe wyniki.',
    previewTitle: 'Podgląd',
    previewTitleButton: 'Podgląd',
    previewButton: 'Przełącz do formatu pytania i odpowiedzi',
    previewSwitchTipStart:
      'Aktulany podgląd bloku jest w formacie tekstu, przełączenie na podgląd w formacie pytania i odpowiedzi spowoduje',
    previewSwitchTipEnd: ' dodatkowe zużycie tokenów',
    characters: 'znaki',
    indexSettedTip: 'Aby zmienić metodę indeksowania, przejdź do ',
    retrivalSettedTip: 'Aby zmienić metodę indeksowania, przejdź do ',
    datasetSettingLink: 'ustawień Wiedzy.',
  },
  stepThree: {
    creationTitle: '🎉 Utworzono Wiedzę',
    creationContent:
      'Automatycznie nadaliśmy nazwę Wiedzy, możesz ją dowolnie zmienić w każdej chwili',
    label: 'Nazwa Wiedzy',
    additionTitle: '🎉 Przesłano dokument',
    additionP1: 'Dokument został przesłany do Wiedzy',
    additionP2: ', możesz go znaleźć na liście dokumentów Wiedzy.',
    stop: 'Zatrzymaj przetwarzanie',
    resume: 'Wznów przetwarzanie',
    navTo: 'Przejdź do dokumentu',
    sideTipTitle: 'Co dalej',
    sideTipContent:
      'Po zakończeniu indeksowania dokumentu, Wiedza może być zintegrowana z aplikacją jako kontekst, można znaleźć ustawienie kontekstu na stronie orkiestracji. Można również stworzyć ją jako niezależny plugin indeksowania ChatGPT do wydania.',
    modelTitle: 'Czy na pewno chcesz zatrzymać embedded?',
    modelContent:
      'Jeśli będziesz potrzebować wznowić przetwarzanie później, będziesz kontynuować od miejsca, w którym przerwałeś.',
    modelButtonConfirm: 'Potwierdź',
    modelButtonCancel: 'Anuluj',
  },
}

export default translation
