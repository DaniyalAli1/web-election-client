import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ElectionForm from "./ElectionForm"


interface ElectionFormDialogProps {
    children: React.ReactNode
}

export default function ElectionFormDialog({children}: ElectionFormDialogProps) {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <ElectionForm>Create a new Form</ElectionForm>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}


//install pnpm dlx shadcn-ui@latest add dialog
