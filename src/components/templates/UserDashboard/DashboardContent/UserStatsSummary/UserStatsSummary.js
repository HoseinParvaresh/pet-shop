export default function UserStatsSummary() {
    return (
        <div class="lg:pb-8">
            <section class="bg-white flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg">
                {/* item */}
                <div class="w-32 sm:w-38 flex items-center gap-x-3 sm:gap-x-5">
                    <img class="size-9 sm:size-11 md:size-12" src="/courses-empty.png" alt="" />
                    <div class="flex flex-col gap-y-2 text-xs sm:text-sm">
                        <span class="font-danaBold">36 دوره</span>
                        <span class="text-black/80">دوره ها من</span>
                    </div>
                </div>
            </section>
        </div>
    );
}