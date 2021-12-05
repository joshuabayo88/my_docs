import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <div className=" sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="blue"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="md:inline-flex h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" color="gray" />
      </Button>
      <Icon
        name="description"
        size="5xl"
        color="blue"
        className="cursor-pointer"
      />
      <h1 className="text-gray-700 text-2xl">Docs</h1>
      <div
        className="flex flex-grow md:mx-20 items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg mx-5 focus-within:text-gray-600
			 focus-within:shadow-md"
      >
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2 hover:scale-110 transition duration-200"
        src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        alt="Profile Photo"
      />
    </div>
  );
}

export default Header;
