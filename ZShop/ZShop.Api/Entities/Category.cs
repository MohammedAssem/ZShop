namespace ZShop.Api.Entities
{
    public class Category : TrackedEntity
    {
        public string Description { get; set; }
        public int ParentID { get; set; }


    }
}
