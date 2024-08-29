import { db } from '@/db';

export default async function Product({ params }: { params: { productId: string } }) {
	const findedProduct = await db.query.products.findFirst({
		where: (products, { eq }) => eq(products.id, params.productId),
	});

	if (!findedProduct) {
		return <div>Product not found</div>;
	}

	return (
		<div className='group relative w-full p-10 flex items-center flex-col'>
			<h3 className='text-gray-200 line-clamp-1 text-3xl mb-4'>
				<a href='#'>
					<span aria-hidden='true' className='absolute inset-0' />
					{findedProduct.name}
				</a>
			</h3>
			<div className='aspect-h-1 aspect-w-1 w-1/2 overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96'>
				<img
					src={findedProduct.imageUrl!}
					alt="Front of men's Basic Tee in black."
					className='h-full w-full object-cover object-center lg:h-full lg:w-full'
				/>
			</div>
			<div className='p-2 flex justify-between bg-gray-800 rounded-b-lg min-h-24 w-1/2'>
				<div>
					<p className='mt-1 text-sm text-gray-400 line-clamp-3'>{findedProduct.description}</p>
				</div>
				<p className='text-sm font-medium text-gray-100'>R${findedProduct.price}</p>
			</div>
		</div>
	);
}
