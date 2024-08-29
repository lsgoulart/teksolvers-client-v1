import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Files() {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Arquivos</Label>
      <div className="flex space-x-2">
        <Input id="name" type="file" />
      </div>
    </div>
  )
}