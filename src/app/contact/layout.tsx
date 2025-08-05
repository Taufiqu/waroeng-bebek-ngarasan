import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak Kami - Waroeng Bebek Ngarasan',
  description: 'Hubungi Waroeng Bebek Ngarasan untuk reservasi, pemesanan, atau informasi lebih lanjut. Kami siap melayani Anda.',
  keywords: 'kontak, alamat, telepon, whatsapp, reservasi, waroeng bebek',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
