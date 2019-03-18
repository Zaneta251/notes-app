import LocalizedStrings from "react-localization";

const lang = {
  en: {
    title: "Application for creating and managing notes",
    addNew: "Add a new note",
    add: "Add",
    BSC: "BSC",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    save: "Save",
    editSuccess: "Note successfully edited!",
    createSuccess: "Note successfully created!",
    deleteSuccess: "Note successfully deleted!"
  },
  cz: {
    title: "Aplikace pro vytváření a správu poznámek",
    addNew: "Přidat novou poznámku",
    add: "Přidat",
    BSC: "BSC",
    cancel: "Zrušit",
    delete: "Vymazat",
    edit: "Upravit",
    save: "Uložit",
    editSuccess: "Poznámka úspěšně upravena!",
    createSuccess: "Poznámka úspěšně vytvořena!",
    deleteSuccess: "Poznámka úspěšně vymazána!"
  }
};

export const strings = new LocalizedStrings(lang);
