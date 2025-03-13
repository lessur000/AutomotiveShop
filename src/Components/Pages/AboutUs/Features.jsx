const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section className="bg-black relative z-20 py-20">
        <div className="container mx-auto space-y-20">
          <div className="space-y-3">
            <h1 className="text-white text-4xl font-medium">
              We understand Cars
            </h1>
            <p className="text-white max-w-[510px]">
              Im a paragraph. Click here to add your own text and edit me. Its
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Im a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          {/* Table */}
          <div className="">
            <table className="border-collapse border border-white">
              <tbody className="flex flex-col md:flex-row text-white">
                <tr className="border border-white p-5  flex flex-col">
                  <td className="text-3xl font-semibold">Dependability</td>
                  <td className="mt-5">
                    Im a paragraph. Click here to add your own text and edit me.
                    Im a great place for you to tell a story and let your users
                    know a little more about you.
                  </td>
                </tr>
                <tr className="border border-white p-5  flex flex-col">
                  <td className="text-3xl font-semibold">Affordability</td>
                  <td className="mt-5">
                    Im a paragraph. Click here to add your own text and edit me.
                    Im a great place for you to tell a story and let your users
                    know a little more about you.
                  </td>
                </tr>
                <tr className="border border-white p-5 flex flex-col">
                  <td className="text-3xl font-semibold">Availability</td>
                  <td className="mt-5">
                    Im a paragraph. Click here to add your own text and edit me.
                    Im a great place for you to tell a story and let your users
                    know a little more about you.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
