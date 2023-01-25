namespace ZShop.Api.Entities
{
    public class Product : TrackedEntity
    {
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public Brand Brand { get; set; }
        public Category Category { get; set; }
        public Vendor Vendor { get; set; }
    }
}
