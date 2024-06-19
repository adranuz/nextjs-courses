import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import { ChevronRightIcon } from "lucide-react";


export default function Page() {
  return (
		<div className="grid gap-2 grid-cols-5">
			<Button variant="default">Default</Button>
			<Button variant="secondary">secondary</Button>
			<Button variant="ghost">ghost</Button>
			<Button variant="link">link</Button>
			<Button variant="outline">outline</Button>
			<Button variant="destructive">destructive</Button>
			{/* <Button onClick={() => {console.log('clicked')}}>click me</Button> */}
			<Button variant="success">success</Button>
			<Button capitalize={false}>capitalize</Button>
			<Button variant="outline" size="icon">
      <ChevronRightIcon className="h-4 w-4" />
    </Button>
		<Button>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>
		<Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
		</div>
	);
}