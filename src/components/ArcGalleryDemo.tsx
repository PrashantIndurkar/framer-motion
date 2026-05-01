import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";

export default function ArcGalleryDemo() {
  // An array of images from the public folder
  const memoryImages = [
    '/image/imgi_10_UT4fxQBnxf542T5Cf7zZOvBxy0.png',
    '/image/imgi_11_4UX9uXT3N0WRExPOcc1r8bpVQAk.png',
    '/image/imgi_12_GSFkssTRojMMfTCPqH1HENDnw.png',
    '/image/imgi_13_pSEmRq7TZ5niunpklVk0dvh1mDA.png',
    '/image/imgi_14_WdMlO6P4eyTomKkSRBDtGLAio4.png',
    '/image/imgi_15_AcrDBNPoA5kazwDFtUC2IeoPoo.png',
    '/image/imgi_16_d8p3LHFKtLnBbQ65oGYA48cZwYI.png',
    '/image/imgi_17_505rrWNYkeLbF8KyvL2Owkhh7I.png',
    '/image/imgi_18_AOAg5gzJT8elHJjF4ot4zv58UAE.png',
    '/image/imgi_19_npXLqR8zSrRQ361syHkuwTjdeds.png',
    '/image/imgi_20_lEVDQNWDkdXcIlfM1j2Kfmp8at8.png',
    '/image/imgi_21_zRjU5BQHkKDyauYKM2E6MQnLpo.png',
  ];

  return (
    <div className="w-full">
      <ArcGalleryHero images={memoryImages} />
    </div>
  );
}
