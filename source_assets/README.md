Production files live in the repository root, `brand_assets`, and `assets`.

`source_assets/originals` keeps full-size source photos, achievement PDFs/screenshots, and other source-only media as an archive. These files are not referenced by the site and should not be uploaded with the public static build unless the archive is needed separately.

When a source asset is needed on the site, create a cropped/optimized production copy under `assets/` and reference that copy from `index.html`. Keep the original here for future re-processing.
