import WhiteArrowSVG from '@/components/common/svg_icons/WhiteArrowSVG';
import WhiteStarSVG from '@/components/common/svg_icons/WhiteStarSVG';
import PlayerStatus from '@/components/global-components/player-status';
import Image from 'next/image';

const HeroSection = () => {
    // Dummy user data
    const user = {
        username: 'User1234',
        vipProgress: 75.5,
        Level: 'None',
        NextLevel: 'Silver',
    };

    // Dummy section data
    const types = [
        {
            title: 'Casino',
            imageSrc: '/currentGameImages/casino.avif',
            players: 348,
        },
        {
            title: 'Sports',
            imageSrc: '/currentGameImages/sports.avif',
            players: 348,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {/* User Info */}
            <div className="w-full col-span-1 sm:col-span-2 lg:col-span-1 text-white space-y-8 place-content-center">
                
                <div className=" font-medium text-2xl">
                    {user.username}
                </div>
                

                <div className='w-full space-y-6'>

                    <div className='w-full grid grid-cols-5 text-base '>
                        <div className='col-span-2'>Your VIP Progress</div>
                        <div className='flex items-center justify-center'>
                            <WhiteArrowSVG className='w-4' />
                        </div>
                        <div className='text-right col-span-2'>
                            {user.vipProgress.toFixed(1)}%
                        </div>
                    </div>

                    {/* progress bar */}
                    <div className="w-full bg-background-1 rounded-full">
                        <div
                            className="bg-gradient-to-t from-orange-1 to-yellow-1 h-3 rounded-full"
                            style={{ width: `${user.vipProgress}%` }}
                        ></div>
                    </div>


                    <div className="w-full grid grid-cols-5 text-sm">
                        <div className='flex items-center gap-2 justify-start col-span-2'>
                            <WhiteStarSVG className='stroke-white' />
                            <span>{user.Level}</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <WhiteArrowSVG className='w-4' />
                        </div>
                        <div className='flex items-center gap-2 justify-end col-span-2'>
                            <WhiteStarSVG className='fill-white' />
                            <span>
                                {user.NextLevel}
                            </span>
                        </div>
                    </div>

                </div>

            </div>

            {/* types */}
            <div className="grid grid-cols-2 sm:col-span-2 gap-4 lg:gap-8 xl:gap-12">
                {types.map((type, index) => (
                    <div key={index} className="relative w-full h-full space-y-2">
                        
                        <div className='w-full bg-secondary rounded-lg overflow-hidden'>
                            <Image
                                src={type.imageSrc}
                                alt={`${type.title} type`}
                                width={400}
                                height={225}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="text-white flex items-center justify-between">
                            <h3 className="text-sm font-semibold">
                                {type.title}
                            </h3>

                            <PlayerStatus players={type.players} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;