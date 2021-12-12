import Button from "../Button";


export default function MriCard() {
    return (
        <div>
            <div class="w-35 max-w-full border border-gray-300 rounded-lg bg-white">
                <div class="w-full h-48">
                    <img
                        src="https://prod-images-static.radiopaedia.org/images/12080041/420528ff1c73cb5a18e9f5603f742f_big_gallery.jpeg"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div class="p-6">
                    <h5 class="text-lg font-medium">01-Dec-2021</h5>
                    <p class="mt-2">
                        This is your MRI on the given date
                    </p>
                    <div class="mt-4 flex">
                        <Button name="Click for Details and Report"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
