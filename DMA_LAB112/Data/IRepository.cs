using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace DMA_LAB112.Data
{

    public interface IRepository<T> where T : class
    {
        T GetById(int id);
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Expression<Func<T, bool>> expression);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
    }

}
