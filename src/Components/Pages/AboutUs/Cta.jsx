import background from "/images/vehicles4.jpg";

const Cta = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${background})` }}
        className="bg-no-repeat bg-cover bg-center h-auto"
      >
        <div className="space-y-10 container mx-auto py-26">
          <div className="text-white space-y-10">
            <h1 className="text-5xl max-w-[500px]">
              A One-Stop Shop for Automotive Enthusiasts
            </h1>
            <p className="font-medium text-md max-w-[520px]">
              Im a paragraph. Click here to add your own text and edit me. Its
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Im a great place for you to
              tell a story and let your users know a little more about you
            </p>
          </div>

          <div className="space-y-7">
            <div className="text-white flex items-center gap-5">
              <div className="rounded-full bg-white w-2 h-2"></div>
              <p className="font-semibold">
                Free shipping on all orders over $75
              </p>
            </div>

            <div className="text-white flex items-center gap-5">
              <div className="rounded-full bg-white w-2 h-2"></div>
              <p className="max-w-[300px] font-semibold">
                Tested & proven before any product lands on our shelves, its
                thoroughly tested
              </p>
            </div>

            <div className="text-white flex items-center gap-5">
              <div className="rounded-full bg-white w-2 h-2"></div>
              <p className="font-semibold">Customer service available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
