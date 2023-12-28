import Single from "./SingleProd"
import Link from 'next/link'
import Flash from "./Flashsales"
import ViewAll from "../comps/ViewAll"
import SalesDesc from "./SalesDescription"
export default function Product() {
  return (
<div className="flex flex-col items-center gap-10">
  <SalesDesc/>
 <Flash/>
 <ViewAll/>
</div>
  )
}