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
    phone: "",            // e.g. "+91 94470 00000"
    email: "",            // e.g. "aitucpathanapuram@gmail.com"
    address: "",          // e.g. "AITUC Office, Pathanapuram, Kollam, Kerala - 689695"
    whatsapp: "",         // e.g. "https://wa.me/919447000000"
    facebook: "",         // e.g. "https://www.facebook.com/aitucpathanapuram"
    instagram: "",        // e.g. "https://www.instagram.com/aitucpathanapuram"
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

