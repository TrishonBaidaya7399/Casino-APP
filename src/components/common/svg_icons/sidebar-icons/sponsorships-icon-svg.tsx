function SponsorShipIconSVG({ className = "" }: { className?: string }) {
    return (
        <svg className={`w-5 ${className} fill-white`} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M6.106 15.247C3.298 13.083 0 10.542 0 6.13702C0 1.27402 5.5 -2.17498 10 2.50102V17.5C9 17.5 8 16.73 6.962 15.91C6.684 15.6927 6.39867 15.4717 6.106 15.247Z" />
            <path d="M13.038 15.91C15.981 13.592 20 11 20 6.13802C20 1.27602 14.5 -2.17498 10 2.50102V17.5C11 17.5 12 16.73 13.038 15.91Z" />
        </svg>
    );
}

export default SponsorShipIconSVG;
