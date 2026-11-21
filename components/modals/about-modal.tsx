// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog";

// import { useLanguage } from "@/providers/language-provider";
// import { useLenisModal } from "@/hooks/use-lenis-modal";
// import { RichText } from "@/lib/markdown";

// interface AboutModalProps {
//     open: boolean;
//     onOpenChange: (open: boolean) => void;
// }

// export function AboutModal({ open, onOpenChange }: AboutModalProps) {
//     const { content, dict } = useLanguage();
//     useLenisModal(open);

//     return (
//         <Dialog open={open} onOpenChange={onOpenChange}>
//             <DialogContent
//                 showCloseButton={true}
//                 className="flex flex-col sm:max-w-[640px] max-h-[85vh] p-0 gap-0 border-border/50 bg-background/95 backdrop-blur-xl"
//             >
//                 <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent z-10" />

//                 <div className="relative px-8 pt-8 pb-4 shrink-0">
//                     <DialogHeader className="gap-3">
//                         <DialogTitle className="text-2xl font-bold tracking-tight">
//                             {dict.title.about}
//                         </DialogTitle>
//                     </DialogHeader>
//                 </div>

//                 <div className="overflow-y-auto px-8 pb-8 pt-2 flex-1" data-lenis-prevent="true">
//                     <div className="flex flex-col gap-6">
//                         <div className="text-sm text-foreground/80 leading-relaxed font-light">
//                             <RichText>{content.about.full}</RichText>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent z-10" />
//             </DialogContent>
//         </Dialog>
//     );
// }

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { useLanguage } from "@/providers/language-provider";
import { useLenisModal } from "@/hooks/use-lenis-modal";
import { RichText } from "@/lib/markdown";

interface AboutModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function AboutModal({ open, onOpenChange }: AboutModalProps) {
    const { content, dict } = useLanguage();
    useLenisModal(open);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                showCloseButton={true}
                className="
                    grid
                    h-[min(780px,88vh)]
                    max-h-[88vh]
                    w-[min(920px,calc(100%-2rem))]
                    max-w-none
                    grid-cols-1
                    gap-0
                    overflow-hidden
                    border-border/50
                    bg-background/95
                    p-0
                    shadow-2xl
                    backdrop-blur-xl
                    sm:max-w-none
                    sm:rounded-xl
                    md:h-[min(650px,85vh)]
                    md:max-h-[85vh]
                    md:grid-cols-[1.18fr_0.82fr]
                "
            >
                {/* Top Accent Line */}
                <div className="absolute left-0 right-0 top-0 z-20 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

                {/* LEFT SIDE - ABOUT TEXT */}
                <section className="order-2 flex min-h-0 flex-col md:order-1">

                    {/* Modal Header */}
                    <div className="shrink-0 px-7 pb-3 pt-7 sm:px-9 sm:pt-9">
                        <DialogHeader className="gap-3">
                            <DialogTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                                {dict.title.about}
                            </DialogTitle>
                        </DialogHeader>
                    </div>

                    {/* About Content */}
                    <div
                        className="
                            min-h-0
                            flex-1
                            overflow-y-auto
                            px-7
                            pb-7
                            pt-2
                            sm:px-9
                            sm:pb-9
                        "
                        data-lenis-prevent="true"
                    >
                        <div className="text-sm font-light leading-relaxed text-foreground/80 sm:text-[0.925rem]">
                            <RichText>{content.about.full}</RichText>
                        </div>
                    </div>
                </section>

                {/* RIGHT SIDE - IMAGE */}
                <div className="
                    relative
                    order-1
                    min-h-[190px]
                    overflow-hidden
                    bg-muted
                    md:order-2
                    md:min-h-0
                ">
                    <img
                        src="/hero-slider/photo3.webp"
                        alt="Ahmadan Fatrah"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            object-center
                        "
                    />

                    {/* Image Overlay */}
                    <div className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-black/35
                        via-transparent
                        to-black/10
                        md:bg-linear-to-l
                        md:from-transparent
                        md:via-transparent
                        md:to-background/15
                    " />

                    {/* Image Caption */}
                    <div className="
                        absolute
                        bottom-4
                        left-5
                        text-xs
                        font-medium
                        tracking-[0.18em]
                        text-white/85
                        md:bottom-6
                        md:left-6
                    ">
                        AHMADAN FATRAH
                    </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-20
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-primary/50
                    to-transparent
                " />
            </DialogContent>
        </Dialog>
    );
}
