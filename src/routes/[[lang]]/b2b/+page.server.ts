import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/b2bPage";
import { PUBLIC_IMG_URL } from "$env/static/public";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
  const data = await getClient().query({
    query: query(),
    variables: {
      locale: `${params.lang ? params.lang : "bg"}`,
    },
  });

  return data;
};

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const email = data.get("email");
    const phoneNumber = data.get("phoneNumber");
    // @ts-expect-error
    const currentOffering = JSON.parse(data.get("offering"));
    // @ts-expect-error
    const knowledge = JSON.parse(data.get("knowledge"));
    const redWines = data.getAll("redWines");
    const whiteWines = data.getAll("whiteWines");
    const roseWines = data.getAll("roseWines");
    const collectionWines = data.getAll("collectionWines");
    const visits = data.getAll("visits");
    const businessActivity = data.get("businessActivity");
    const companyName = data.get("companyName");
    const contactPerson = data.get("contactPerson");

    const interestsArray = [
      ...redWines,
      ...whiteWines,
      ...roseWines,
      ...collectionWines,
      ...visits,
    ];

    const interests = interestsArray.join(", ");

    const fetchOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          email: email,
          phoneNumber: phoneNumber,
          currentOffering: currentOffering,
          knowledge: knowledge,
          interests: interests,
          businessActivity: businessActivity,
          companyName: companyName,
          contactPerson: contactPerson,
        },
      }),
    };

    const response = await fetch(
      `${PUBLIC_IMG_URL}/api/messages`,
      fetchOptions
    );

    const json = await response.json();

    return { success: true, message: json.message };
  },
};
