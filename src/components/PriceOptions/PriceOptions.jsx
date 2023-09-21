import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    
const   priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Personal trainer available for a fee",
              "Monthly fitness assessment",
              "Discounts on gym merchandise",
              "Access to nutrition workshops",
            ],
            "price": "$29.99"
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Unlimited group fitness classes",
              "Personal trainer sessions included",
              "Sauna and steam room access",
              "Nutritional counseling",
              "Access to exclusive members-only events",
          
            ],
            "price": "$49.99"
          },
          {
            "id": 3,
            "name": "Family Membership",
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Locker room access",
              "Sauna and steam room access",
              "Childcare services available during workouts",
              "Discounts on family packages",
              "Access to family-friendly fitness classes",
              "Family fitness challenges"
            ],
            "price": "$89.99"
          }
        ]
      

      
    return (
        <div className="m-12">
            <div className="text-5xl">Best Prices in the Town</div>
            <div className="grid grid-cols-3 gap-6">
            {
              priceOptions.map((option) => <PriceOption key={option.id} option={option}> </PriceOption>)  
            }
            </div>
        </div>
    );
};

export default PriceOptions;