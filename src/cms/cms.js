import CMS from "netlify-cms-app"

import HomePagePreview from "./preview-templates/HomePagePreview"
import AboutPagePreview from "./preview-templates/AboutPagePreview"
import ContactPagePreview from "./preview-templates/ContactPagePreview"
// import TourCalendarPagePreview from "./preview-templates/TourCalendarPagePreview";
import TourPagePreview from "./preview-templates/TourPagePreview"

CMS.registerPreviewTemplate("homepage", HomePagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("contact", ContactPagePreview)
// CMS.registerPreviewTemplate("tourcalendar", TourCalendarPagePreview);
CMS.registerPreviewTemplate("tours", TourPagePreview)
