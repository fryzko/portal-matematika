declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"materi": {
"aljabar/bentuk-aljabar/04-unsur-unsur-aljabar.mdx": {
	id: "aljabar/bentuk-aljabar/04-unsur-unsur-aljabar.mdx";
  slug: "aljabar/bentuk-aljabar/04-unsur-unsur-aljabar";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/bentuk-aljabar/05-operasi-hitung-aljabar.mdx": {
	id: "aljabar/bentuk-aljabar/05-operasi-hitung-aljabar.mdx";
  slug: "aljabar/bentuk-aljabar/05-operasi-hitung-aljabar";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/bentuk-aljabar/08-sistem-persamaan-linear-dua-variabel.mdx": {
	id: "aljabar/bentuk-aljabar/08-sistem-persamaan-linear-dua-variabel.mdx";
  slug: "aljabar/bentuk-aljabar/08-sistem-persamaan-linear-dua-variabel";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/bentuk-aljabar/08a-spldv-substitusi.mdx": {
	id: "aljabar/bentuk-aljabar/08a-spldv-substitusi.mdx";
  slug: "aljabar/bentuk-aljabar/08a-spldv-substitusi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/bentuk-aljabar/08b-spldv-eliminasi.mdx": {
	id: "aljabar/bentuk-aljabar/08b-spldv-eliminasi.mdx";
  slug: "aljabar/bentuk-aljabar/08b-spldv-eliminasi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/bentuk-aljabar/08c-spldv-grafik.mdx": {
	id: "aljabar/bentuk-aljabar/08c-spldv-grafik.mdx";
  slug: "aljabar/bentuk-aljabar/08c-spldv-grafik";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/persamaan-garis-lurus/01-gradien-garis.mdx": {
	id: "aljabar/persamaan-garis-lurus/01-gradien-garis.mdx";
  slug: "aljabar/persamaan-garis-lurus/01-gradien-garis";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/persamaan-garis-lurus/02-persamaan-garis-lurus.mdx": {
	id: "aljabar/persamaan-garis-lurus/02-persamaan-garis-lurus.mdx";
  slug: "aljabar/persamaan-garis-lurus/02-persamaan-garis-lurus";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/persamaan-linear/01-persamaan-linear-satu-variabel.mdx": {
	id: "aljabar/persamaan-linear/01-persamaan-linear-satu-variabel.mdx";
  slug: "aljabar/persamaan-linear/01-persamaan-linear-satu-variabel";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/persamaan-linear/02-pertidaksamaan-linear.mdx": {
	id: "aljabar/persamaan-linear/02-pertidaksamaan-linear.mdx";
  slug: "aljabar/persamaan-linear/02-pertidaksamaan-linear";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/pola-bilangan/02-pola-bilangan-geometri.mdx": {
	id: "aljabar/pola-bilangan/02-pola-bilangan-geometri.mdx";
  slug: "aljabar/pola-bilangan/02-pola-bilangan-geometri";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/pola-bilangan/03-pola-bilangan-figuratif.mdx": {
	id: "aljabar/pola-bilangan/03-pola-bilangan-figuratif.mdx";
  slug: "aljabar/pola-bilangan/03-pola-bilangan-figuratif";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/pola-bilangan/mengenal-pola-bilangan.mdx": {
	id: "aljabar/pola-bilangan/mengenal-pola-bilangan.mdx";
  slug: "aljabar/pola-bilangan/mengenal-pola-bilangan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/relasi-fungsi/01-mengenal-relasi.mdx": {
	id: "aljabar/relasi-fungsi/01-mengenal-relasi.mdx";
  slug: "aljabar/relasi-fungsi/01-mengenal-relasi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/relasi-fungsi/02-mengenal-fungsi.mdx": {
	id: "aljabar/relasi-fungsi/02-mengenal-fungsi.mdx";
  slug: "aljabar/relasi-fungsi/02-mengenal-fungsi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"aljabar/relasi-fungsi/03-grafik-fungsi.mdx": {
	id: "aljabar/relasi-fungsi/03-grafik-fungsi.mdx";
  slug: "aljabar/relasi-fungsi/03-grafik-fungsi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/aritmetika-sosial/01-untung-rugi-dan-diskon.mdx": {
	id: "bilangan/aritmetika-sosial/01-untung-rugi-dan-diskon.mdx";
  slug: "bilangan/aritmetika-sosial/01-untung-rugi-dan-diskon";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/aritmetika-sosial/02-bunga-tunggal-dan-bruto-neto.mdx": {
	id: "bilangan/aritmetika-sosial/02-bunga-tunggal-dan-bruto-neto.mdx";
  slug: "bilangan/aritmetika-sosial/02-bunga-tunggal-dan-bruto-neto";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-bulat/01-mengenal-bilangan-bulat.mdx": {
	id: "bilangan/bilangan-bulat/01-mengenal-bilangan-bulat.mdx";
  slug: "bilangan/bilangan-bulat/01-mengenal-bilangan-bulat";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-bulat/02-membandingkan-mengurutkan.mdx": {
	id: "bilangan/bilangan-bulat/02-membandingkan-mengurutkan.mdx";
  slug: "bilangan/bilangan-bulat/02-membandingkan-mengurutkan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-bulat/03-operasi-penjumlahan-pengurangan.mdx": {
	id: "bilangan/bilangan-bulat/03-operasi-penjumlahan-pengurangan.mdx";
  slug: "bilangan/bilangan-bulat/03-operasi-penjumlahan-pengurangan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-bulat/04-operasi-perkalian-pembagian.mdx": {
	id: "bilangan/bilangan-bulat/04-operasi-perkalian-pembagian.mdx";
  slug: "bilangan/bilangan-bulat/04-operasi-perkalian-pembagian";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-bulat/mengenal-bilangan-bulat.mdx": {
	id: "bilangan/bilangan-bulat/mengenal-bilangan-bulat.mdx";
  slug: "bilangan/bilangan-bulat/mengenal-bilangan-bulat";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-rasional/01-mengenal-bilangan-rasional.mdx": {
	id: "bilangan/bilangan-rasional/01-mengenal-bilangan-rasional.mdx";
  slug: "bilangan/bilangan-rasional/01-mengenal-bilangan-rasional";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-rasional/02-operasi-dan-estimasi.mdx": {
	id: "bilangan/bilangan-rasional/02-operasi-dan-estimasi.mdx";
  slug: "bilangan/bilangan-rasional/02-operasi-dan-estimasi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-rasional/03-literasi-finansial.mdx": {
	id: "bilangan/bilangan-rasional/03-literasi-finansial.mdx";
  slug: "bilangan/bilangan-rasional/03-literasi-finansial";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-rasional/04-operasi-penjumlahan-pengurangan-pecahan.mdx": {
	id: "bilangan/bilangan-rasional/04-operasi-penjumlahan-pengurangan-pecahan.mdx";
  slug: "bilangan/bilangan-rasional/04-operasi-penjumlahan-pengurangan-pecahan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/bilangan-rasional/05-operasi-perkalian-pembagian-pecahan.mdx": {
	id: "bilangan/bilangan-rasional/05-operasi-perkalian-pembagian-pecahan.mdx";
  slug: "bilangan/bilangan-rasional/05-operasi-perkalian-pembagian-pecahan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/himpunan/01-mengenal-himpunan.mdx": {
	id: "bilangan/himpunan/01-mengenal-himpunan.mdx";
  slug: "bilangan/himpunan/01-mengenal-himpunan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/himpunan/02-operasi-himpunan.mdx": {
	id: "bilangan/himpunan/02-operasi-himpunan.mdx";
  slug: "bilangan/himpunan/02-operasi-himpunan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/pangkat-dan-akar/06-bilangan-berpangkat-bulat.mdx": {
	id: "bilangan/pangkat-dan-akar/06-bilangan-berpangkat-bulat.mdx";
  slug: "bilangan/pangkat-dan-akar/06-bilangan-berpangkat-bulat";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/pangkat-dan-akar/07-merasionalkan-bentuk-akar.mdx": {
	id: "bilangan/pangkat-dan-akar/07-merasionalkan-bentuk-akar.mdx";
  slug: "bilangan/pangkat-dan-akar/07-merasionalkan-bentuk-akar";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/pangkat-dan-akar/08-notasi-ilmiah.mdx": {
	id: "bilangan/pangkat-dan-akar/08-notasi-ilmiah.mdx";
  slug: "bilangan/pangkat-dan-akar/08-notasi-ilmiah";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/perbandingan/01-perbandingan-senilai.mdx": {
	id: "bilangan/perbandingan/01-perbandingan-senilai.mdx";
  slug: "bilangan/perbandingan/01-perbandingan-senilai";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"bilangan/perbandingan/02-perbandingan-berbalik-nilai.mdx": {
	id: "bilangan/perbandingan/02-perbandingan-berbalik-nilai.mdx";
  slug: "bilangan/perbandingan/02-perbandingan-berbalik-nilai";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/bangun-ruang/10-bangun-ruang-dan-jaring-jaring.mdx": {
	id: "geometri/bangun-ruang/10-bangun-ruang-dan-jaring-jaring.mdx";
  slug: "geometri/bangun-ruang/10-bangun-ruang-dan-jaring-jaring";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/bangun-ruang/11-volume-bangun-ruang.mdx": {
	id: "geometri/bangun-ruang/11-volume-bangun-ruang.mdx";
  slug: "geometri/bangun-ruang/11-volume-bangun-ruang";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/bangun-ruang/12-luas-permukaan.mdx": {
	id: "geometri/bangun-ruang/12-luas-permukaan.mdx";
  slug: "geometri/bangun-ruang/12-luas-permukaan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/garis-dan-sudut/01-mengenal-garis-dan-sudut.mdx": {
	id: "geometri/garis-dan-sudut/01-mengenal-garis-dan-sudut.mdx";
  slug: "geometri/garis-dan-sudut/01-mengenal-garis-dan-sudut";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/garis-dan-sudut/02-hubungan-antar-sudut.mdx": {
	id: "geometri/garis-dan-sudut/02-hubungan-antar-sudut.mdx";
  slug: "geometri/garis-dan-sudut/02-hubungan-antar-sudut";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/kesebangunan/01-kesebangunan-bangun-datar.mdx": {
	id: "geometri/kesebangunan/01-kesebangunan-bangun-datar.mdx";
  slug: "geometri/kesebangunan/01-kesebangunan-bangun-datar";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/kesebangunan/02-kekongruenan.mdx": {
	id: "geometri/kesebangunan/02-kekongruenan.mdx";
  slug: "geometri/kesebangunan/02-kekongruenan";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/lingkaran/01-keliling-dan-luas-lingkaran.mdx": {
	id: "geometri/lingkaran/01-keliling-dan-luas-lingkaran.mdx";
  slug: "geometri/lingkaran/01-keliling-dan-luas-lingkaran";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/lingkaran/02-busur-juring-dan-tali-busur.mdx": {
	id: "geometri/lingkaran/02-busur-juring-dan-tali-busur.mdx";
  slug: "geometri/lingkaran/02-busur-juring-dan-tali-busur";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/segiempat-segitiga/01-keliling-luas-segitiga.mdx": {
	id: "geometri/segiempat-segitiga/01-keliling-luas-segitiga.mdx";
  slug: "geometri/segiempat-segitiga/01-keliling-luas-segitiga";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/segiempat-segitiga/02-keliling-luas-segiempat.mdx": {
	id: "geometri/segiempat-segitiga/02-keliling-luas-segiempat.mdx";
  slug: "geometri/segiempat-segitiga/02-keliling-luas-segiempat";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/teorema-pythagoras/02-triple-pythagoras.mdx": {
	id: "geometri/teorema-pythagoras/02-triple-pythagoras.mdx";
  slug: "geometri/teorema-pythagoras/02-triple-pythagoras";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/teorema-pythagoras/03-pythagoras-koordinat.mdx": {
	id: "geometri/teorema-pythagoras/03-pythagoras-koordinat.mdx";
  slug: "geometri/teorema-pythagoras/03-pythagoras-koordinat";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/teorema-pythagoras/mengenal-teorema-pythagoras.mdx": {
	id: "geometri/teorema-pythagoras/mengenal-teorema-pythagoras.mdx";
  slug: "geometri/teorema-pythagoras/mengenal-teorema-pythagoras";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/transformasi/01-translasi.mdx": {
	id: "geometri/transformasi/01-translasi.mdx";
  slug: "geometri/transformasi/01-translasi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/transformasi/02-refleksi.mdx": {
	id: "geometri/transformasi/02-refleksi.mdx";
  slug: "geometri/transformasi/02-refleksi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/transformasi/03-rotasi.mdx": {
	id: "geometri/transformasi/03-rotasi.mdx";
  slug: "geometri/transformasi/03-rotasi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"geometri/transformasi/04-dilatasi.mdx": {
	id: "geometri/transformasi/04-dilatasi.mdx";
  slug: "geometri/transformasi/04-dilatasi";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"statistika/peluang/01-peluang-teoretik.mdx": {
	id: "statistika/peluang/01-peluang-teoretik.mdx";
  slug: "statistika/peluang/01-peluang-teoretik";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"statistika/peluang/02-peluang-empirik.mdx": {
	id: "statistika/peluang/02-peluang-empirik.mdx";
  slug: "statistika/peluang/02-peluang-empirik";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"statistika/penyajian-data/09-statistika-dan-penyajian-data.mdx": {
	id: "statistika/penyajian-data/09-statistika-dan-penyajian-data.mdx";
  slug: "statistika/penyajian-data/09-statistika-dan-penyajian-data";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"statistika/penyajian-data/10-mean-median-modus.mdx": {
	id: "statistika/penyajian-data/10-mean-median-modus.mdx";
  slug: "statistika/penyajian-data/10-mean-median-modus";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
"statistika/penyajian-data/11-diagram-dan-grafik.mdx": {
	id: "statistika/penyajian-data/11-diagram-dan-grafik.mdx";
  slug: "statistika/penyajian-data/11-diagram-dan-grafik";
  body: string;
  collection: "materi";
  data: InferEntrySchema<"materi">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
