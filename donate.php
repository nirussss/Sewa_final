<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation Form</title>
    <link rel="stylesheet" href="donate.css">
</head>
<body>
    <div class="donation-form-container">
        <h1>Donation Form</h1>
        <form id="donation-form" action="submit_donation.php" method="post">
            <!-- Personal Information -->
            <fieldset>
                <legend>Personal Information</legend>
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" data-placeholder="Enter your full name" required>
                
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="Enter your address" data-placeholder="Enter your address" required>

                <label for="pickup-address">Pick up Address:</label>
                <input type="text" id="pickup-address" name="pickup_address" placeholder="Enter your pickup address" data-placeholder="Enter your pickup address" required>
                
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" data-placeholder="Enter your phone number" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" data-placeholder="Enter your email"  required>
            </fieldset>

            <!-- Additional Information -->
            <fieldset>
                <legend>Additional Information</legend>
                <label for="season">Choose Season:</label>
                <select id="season" name="season">
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                </select>

                <fieldset>
                    <label>Gender:</label>
                    <div class="radio-group">
                        <div class="radio-item">
                            <input type="radio" id="male" name="gender" value="male">
                            <label for="male">Male</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" id="female" name="gender" value="female">
                            <label for="female">Female</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" id="other" name="gender" value="other">
                            <label for="other">Other</label>
                        </div>
                    </div>
                </fieldset>
            </fieldset>

            <!-- Kind of Clothes -->
            <fieldset>
                <legend>Kind of Clothes You Want to Donate</legend>
                <label for="clothes-type">Type of Clothes:</label>
                <input type="text" id="clothes-type" name="clothes_type" placeholder="E.g., Shirts, Pants, Jackets" required>
            </fieldset>

            <!-- Quantity -->
            <fieldset>
                <legend>Enter the Quantity</legend>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" placeholder="Enter the number of items" min="1" required>
            </fieldset>

            <!-- Submit Button -->
            <button type="submit">Submit Donation</button>
        </form>
        <script src="donatevalidation.js"></script>

    </div>
</body>
</html>
