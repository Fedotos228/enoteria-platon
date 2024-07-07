import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

const background = {
  backgroundImage: "url(/images/White.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function NewsLetter() {
  return (
    <Card style={background}>
      <CardContent className="flex flex-col items-start justify-between gap-5 py-11 md:flex-row md:items-center">
        <div>
          <h2 className="mb-3 leading-[130%] md:mb-5">
            Abonați-vă pentru <br /> actualizările ofertei
          </h2>
          <p>Get the latest news and updates from our team</p>
        </div>
        <form className="flex w-full max-w-full flex-col gap-2 xxs:flex-row md:max-w-[50%]">
          <Input type="email" placeholder="Enter your email" />
          <Button type="submit">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  );
}
