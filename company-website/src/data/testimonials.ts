export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sari Amelia',
    role: 'Pelanggan Setia, Bogor',
    quote:
      'Darmi Strawberry favorit banget di rumah, creamy dan nggak terlalu manis. Selalu mampir tiap lewat gubuknya.',
  },
  {
    id: 't2',
    name: 'Dimas Prakoso',
    role: 'Cucu si Mbok, Depok',
    quote:
      'Suka sama konsep gubuk yang jadul tapi tetap nyaman. Susu panasnya pas banget diminum pagi-pagi di stasiun.',
  },
  {
    id: 't3',
    name: 'Putri Ramadhani',
    role: 'Pelanggan GoFood',
    quote:
      'Praktis banget pesan lewat GoFood, susunya sampai tetap dingin dan segar. Darmi Cookies-nya juara!',
  },
]
