// ============================================================
//  AITUC Pathanapuram — Site Configuration
//  Edit this file to update URLs, contact details, and branding.
// ============================================================

export const siteConfig = {
  organisationName: "AITUC Pathanapuram",
  organisationNameMalayalam: "എ.ഐ.ടി.യു.സി പത്തനാപുരം",
  organisationFullName: "All India Trade Union Congress",
  tagline: "തൊഴിലാളികളുടെ ഐക്യം, നാടിന്റെ പുരോഗതി",

  // ----------------------------------------------------------------
  //  GOOGLE FORM URLS
  //  Replace the placeholder values below with the actual Google Form links.
  //  Format must start with "https://"
  // ----------------------------------------------------------------
  registrationFormUrl: "https://forms.gle/J96duk9a17ddkbZq7",
  complaintFormUrl: "REPLACE_WITH_GOOGLE_COMPLAINT_FORM_URL",

  // ----------------------------------------------------------------
  //  CONTACT INFORMATION
  //  Fill in the actual contact details below.
  // ----------------------------------------------------------------
  contact: {
    phone: "+91 9947313698",
    email: "Sfckaituc@gmail.com",
    address: "സ്പെൻസർ ഭവൻ, പത്തനാപുരം",
    whatsapp: "https://wa.me/919947313698",
    facebook: "",
    instagram: "",
  },
};

// ----------------------------------------------------------------
//  UTILITY: Open external form in a new tab safely.
//  Used by registration and complaint buttons throughout the site.
// ----------------------------------------------------------------
export const openExternalForm = (url, label = "ഫോം") => {
  if (!url || !url.startsWith("https://")) {
    alert(
      `${label} ലിങ്ക് ഇനിയും ക്രമീകരിച്ചിട്ടില്ല.\n` +
      "ദയവായി src/config/siteConfig.js ഫയലിൽ URL നൽകുക."
    );
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
};

