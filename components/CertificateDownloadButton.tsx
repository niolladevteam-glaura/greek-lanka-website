import { Download } from "lucide-react";

export function CertificateDownloadButton() {
  return (
    <a
      href="/iso9001-certificate.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-5 py-3 bg-maritime-gold text-maritime-navy font-bold rounded-lg shadow hover:bg-maritime-blue hover:text-white transition-colors"
    >
      <Download className="mr-2 h-5 w-5" />
      Download ISO 9001 Certificate
    </a>
  );
}
